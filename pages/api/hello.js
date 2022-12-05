export default function handler(req, res) {
  res.status(200).json({ data: String(Math.floor(Math.random() * 100)) });
}
