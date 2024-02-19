import mongoose from "mongoose";
const { Schema } = mongoose;

const categorySchema = new Schema({
  value: { type: String, required: true, unique: true },
  label: { type: String, required: true, unique: true },
});

const virtual = categorySchema.virtual("id");
virtual.get(function () {
  return this._id;
});
categorySchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

export default mongoose.model("Category", categorySchema);
