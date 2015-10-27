/**
* @fileoverview Empresas
* @author Rafael Lachica Garrido
* @version 0.0.01
**/

var DocumentDBClient = require('documentdb').DocumentClient;
var async = require('async');

/**
* Constructor
* @param empresas donde se ha realizado las practicas
*/
function TaskList(taskDao) {
  this.taskDao = taskDao;
}

module.exports = TaskList;

/**
* Constructor. Funciones asociadas mostrar las empresas (showTasks), añadirlas en (addTask) y eliminarlas (completeTask)
*/
TaskList.prototype = {
    showTasks: function (req, res) {
        var self = this;

        var options = {
          "sort": "puntos"
        }

        var querySpec = {
            query: 'SELECT * FROM root r WHERE r.completed=@completed',
            parameters: [{
                name: '@completed',
                value: false
            }]
        };

        self.taskDao.find(querySpec,function (err, items) {
            if (err) {
                throw (err);
            }

            res.render('index', {
                title: 'Empresas de Practicas',
                tasks: items
            });
        });
    },

    addTask: function (req, res) {
        var self = this;
        var item = req.body;

        self.taskDao.addItem(item, function (err) {
            if (err) {
                throw (err);
            }

            res.redirect('/');
        });
    },

    completeTask: function (req, res) {
        var self = this;
        var completedTasks = Object.keys(req.body);

        async.forEach(completedTasks, function taskIterator(completedTask, callback) {
            self.taskDao.updateItem(completedTask, function (err) {
                if (err) {
                    callback(err);
                } else {
                    callback(null);
                }
            });
        }, function goHome(err) {
            if (err) {
                throw err;
            } else {
                res.redirect('/');
            }
        });
    }
};
