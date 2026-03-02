# UniSkills Version Update Script
# استخدام: .\update-version.ps1 -NewVersion "4.3.0"

param(
    [Parameter(Mandatory=$true)]
    [string]$NewVersion
)

# التحقق من صيغة الإصدار
if ($NewVersion -notmatch '^\d+\.\d+\.\d+$') {
    Write-Host "❌ خطأ: صيغة الإصدار غير صحيحة. استخدم: X.Y.Z (مثال: 4.3.0)" -ForegroundColor Red
    exit 1
}

# الحصول على الإصدار الحالي
$currentVersionMatch = Select-String -Path "index.html" -Pattern 'v=(\d+\.\d+\.\d+)' | Select-Object -First 1
if ($currentVersionMatch) {
    $currentVersion = $currentVersionMatch.Matches.Groups[1].Value
    Write-Host "📦 الإصدار الحالي: v$currentVersion" -ForegroundColor Cyan
    Write-Host "🚀 الإصدار الجديد: v$NewVersion" -ForegroundColor Green
    Write-Host ""
} else {
    Write-Host "⚠️  لم يتم العثور على الإصدار الحالي" -ForegroundColor Yellow
    $currentVersion = "unknown"
}

# تأكيد من المستخدم
$confirmation = Read-Host "هل تريد المتابعة؟ (y/n)"
if ($confirmation -ne 'y') {
    Write-Host "❌ تم الإلغاء" -ForegroundColor Red
    exit 0
}

Write-Host ""
Write-Host "🔄 جاري التحديث..." -ForegroundColor Yellow

# تحديث جميع ملفات HTML
$htmlFiles = Get-ChildItem -Filter "*.html"
$updatedCount = 0

foreach ($file in $htmlFiles) {
    try {
        $content = Get-Content $file.FullName -Raw
        if ($content -match "v=\d+\.\d+\.\d+") {
            $newContent = $content -replace 'v=\d+\.\d+\.\d+', "v=$NewVersion"
            Set-Content $file.FullName -Value $newContent -NoNewline
            Write-Host "  ✅ $($file.Name)" -ForegroundColor Green
            $updatedCount++
        } else {
            Write-Host "  ⏭️  $($file.Name) (لا يحتوي على versioning)" -ForegroundColor Gray
        }
    } catch {
        Write-Host "  ❌ $($file.Name) - خطأ: $_" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "✨ تم التحديث بنجاح!" -ForegroundColor Green
Write-Host "📊 عدد الملفات المحدثة: $updatedCount" -ForegroundColor Cyan
Write-Host ""
Write-Host "📝 الخطوات التالية:" -ForegroundColor Yellow
Write-Host "  1. اختبر الموقع محلياً" -ForegroundColor White
Write-Host "  2. git add ." -ForegroundColor White
Write-Host "  3. git commit -m 'Update to v$NewVersion'" -ForegroundColor White
Write-Host "  4. git push" -ForegroundColor White
Write-Host ""

# إنشاء ملف changelog تلقائي
$changelogEntry = @"

## v$NewVersion - $(Get-Date -Format "yyyy-MM-dd")

### التغييرات
- [ ] أضف وصف التغييرات هنا

---

"@

$changelogPath = "CHANGELOG.md"
if (Test-Path $changelogPath) {
    $existingChangelog = Get-Content $changelogPath -Raw
    Set-Content $changelogPath -Value ($changelogEntry + $existingChangelog) -NoNewline
    Write-Host "📄 تم تحديث CHANGELOG.md" -ForegroundColor Cyan
} else {
    $changelogHeader = @"
# سجل التغييرات - UniSkills Website

$changelogEntry
"@
    Set-Content $changelogPath -Value $changelogHeader -NoNewline
    Write-Host "📄 تم إنشاء CHANGELOG.md" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "🎉 تم! الإصدار الجديد: v$NewVersion" -ForegroundColor Green
