const { where } = require("sequelize");
const { tasks } = require("../models");

const create = async (req, res) => {
    const { title, description, completed } = req.body;
    const response = await tasks.create({
        title: title, description: description, completed: completed
    })
    if (response) {
        res.status(200).json({
            message: "Task Inserted Successfully"
        })
    } else {
        res.status(500).json({
            message: "Task wasnot inserted successfully!"
        })
    }
}

const readAll = async (req, res) => {
    const findAll = await tasks.findAll();
    if (findAll) {
        res.status(200).json({
          message: findAll
        })
      } else {
        res.status(500).json({
          message: "Sorry Bro Cant Show You"
        })
      }

}

const read = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await tasks.findByPk(id);
        if (task === null) {
            res.status(404).json({
                message: "Project not found"
            });
        } else {
            res.status(200).json({
                message: task
            });
        }
    } catch (error) {
        console.error('Error fetching project:', error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
}

const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    try {
        const task = await tasks.findOne({
            where: {
              id: id
            }
          })
          
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        const updatedFields = {};
        if (title !== undefined) updatedFields.title = title;
        if (description !== undefined) updatedFields.description = description;
        if (completed !== undefined) updatedFields.completed = completed;

        if (Object.keys(updatedFields).length > 0) {
            await tasks.update(updatedFields, { where: { id } });
            return res.status(200).json({ message: "Task updated successfully" });
        }

        res.status(400).json({ message: "No fields to update" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

const deleteTask = async (req, res) => {
    let { id } = req.params
    let response = await tasks.destroy({
      where: {
        id: id,
      },
    });
    if (response) {
      res.status(200).json({
        message: "deleted successfully"
      })
    } else {
      res.status(500).json({
        message: response
      })
    }
  }


module.exports = {
    create,
    readAll,
    read,
    updateTask,
    deleteTask
}

