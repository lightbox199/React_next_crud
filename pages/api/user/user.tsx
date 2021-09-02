import nextConnect from "next-connect";
import middleware from "../middlewares/index";
import { NextApiRequest, NextApiResponse } from "next";
import User from "../models/User";
const handler = nextConnect();

handler.use(middleware); // see how we're reusing our middleware

// POST /api/users
handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    var user = new User(req.body);
    user.save((err: any) => {
      if (err) {
        res.json(err);
      } else {
        res.status(201).json({ user });
      }
    });
  }
});

// Get /api/users
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "Get") {
    let books = User.find((err: any) => {
      if (err) {
        res.send("Error!");
      } else {
        res.send(books);
      }
    });
  }
});

// Delete /api/users
handler.delete(async (req: NextApiRequest, res: NextApiResponse) => {
  let id = req.query.id;
  let user = User.deleteOne({ _id: id }, (err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Successfully Deleted Book");
    }
  });
});

export default handler;
