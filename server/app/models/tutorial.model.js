module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      due_date: Date,
      project_date_filer: Boolean,
      created_by: Date,
      client: String,
      project: String,
      task: String,
      status: String,
      assignee: String,
      send_email: String,
      task_type: String,
      priority: String,
      notes: String,
      email_notes: String,

    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("tutorial", schema);
  return Tutorial;
};
