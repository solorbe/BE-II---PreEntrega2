import { SessionModel } from '../models/sessions.model.js';

export class SessionsController {
  static getAll = async (req, res) => {
    try {
      const sessions = await SessionModel.find();
      res.status(200).json(sessions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}

