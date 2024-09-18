const { Router } = require('express');
const router = Router();
const {getAllProjects, getProjectById, updateProject, deleteProject, createProject } = require('../controllers/projects-controller');
const { authenticateRole } = require('../middleware/authentication-handler');


const Admin = ['Admin'];
const Client = ['Admin', 'Client'];


const requireAdmin = authenticateRole(Admin);
const requireClient = authenticateRole(Client);

router.get("/", getAllProjects);

router.get("/:id", getProjectById);

router.put("/:id", updateProject);

router.delete("/:id", deleteProject);

router.post("/", createProject);

module.exports = router;