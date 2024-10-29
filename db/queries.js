import { eventModel } from "@/models/event-models";
import { userModel } from "@/models/user-model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-util";
import mongoose from "mongoose";

//getting all events data details
async function getAllEvents(query) {
  let allEvents = [];
  if (query) {
    const regex = new RegExp(query, "i");
    allEvents = await eventModel.find({ name: { $regex: regex } }).lean();
  } else {
    allEvents = await eventModel.find().lean();
  }
  return replaceMongoIdInArray(allEvents);
}

//getting single event data details
async function getEventById(eventId) {
  const event = await eventModel.findById(eventId).lean();
  return replaceMongoIdInObject(event);
}

//create register user
async function createUser(user) {
  return await userModel.create(user);
}

//getting register user for login
async function findUserByCredentials(credentials) {
  const user = await userModel.findOne(credentials).lean();

  if (user) {
    return replaceMongoIdInObject(user);
  }
  return null;
}

async function updateInterest(eventId, authId) {
  //getting event from database
  const event = await eventModel.findById(eventId);
  //if event is available then finding users already who has interested in events
  if (event) {
    const foundUsers = event.interested_ids.find(
      (id) => id.toString() === authId
    );
    //if user already exist on event
    if (foundUsers) {
      //converting authId to objectId new mongoose.Types.ObjectId(authId)
      event.interested_ids.pull(new mongoose.Types.ObjectId(authId));
    } else {
      event.interested_ids.push(new mongoose.Types.ObjectId(authId));
    }
    event.save();
  }
}

async function updateGoing(eventId, authId) {
  const event = await eventModel.findById(eventId);
  event.going_ids.push(new mongoose.Types.ObjectId(authId));
  event.save();
}

export {
  getAllEvents,
  getEventById,
  createUser,
  findUserByCredentials,
  updateInterest,
  updateGoing,
};
