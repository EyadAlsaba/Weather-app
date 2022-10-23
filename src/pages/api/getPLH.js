// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PLH } from '../../PLH.js'

export default function handler(req, res) {
  const data = PLH;
  res.status(200).json(data)
}
