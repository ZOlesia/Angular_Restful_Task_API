const   mongoose = require('mongoose'),
        Task = mongoose.model('Task');

let bp = require('body-parser');

module.exports = () => {
    return {
        readAll: (req, res) => {
            Task.find({}, function (err, tasks) {
                if (err) {
                    console.log("err");
                    res.json(err);
                } else {
                    res.json(tasks);
                }
            })
        },

        create: (req, res) => {
            let newTask = new Task({
                title: req.body.title,
                description: req.body.description,
            })
            newTask.save(function (err) {
                if (err) {
                    res.json(err);
                }
                res.redirect('/tasks');
            })
        },

        readOne: (req, res) => {
            Task.findOne({ _id: req.params.id }, function (err, data) {
                if (err) {
                    res.json(err);
                }
                res.json(data);
            })
        },

        update: (req, res) => {
            let updateInfo = {
                'title': req.body.title,
                'description': req.body.description,
                'completed': req.body.completed
            }
            Task.updateOne({ _id: req.params.id }, updateInfo, function (err, datas) {
                if (err) {
                    res.json(err);
                } res.json(datas);
            })
        },

        delete: (req, res) => {
            console.log("dletes")
            Task.deleteOne({ _id: req.params.id }, function (err, datas) {
                if (err) {
                    res.json(err);
                }
                res.json(datas);
            })
        }
    }
}