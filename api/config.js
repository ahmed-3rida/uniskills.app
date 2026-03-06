module.exports = function handler(req, res) {
    res.status(200).json({
        supabaseUrl: process.env.VITE_SUPABASE_URL,
        supabaseKey: process.env.VITE_SUPABASE_ANON_KEY
    });
};
