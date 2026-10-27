import { EventModel } from '../models/events.model.js';

export class EventsController {
  static getAll = async (req, res) => {
    try {
      const events = await EventModel.find();
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}
