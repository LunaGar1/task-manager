const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// GET todas las tareas
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET una tarea por ID
router.get('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ error: 'Tarea no encontrada' });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST crear tarea
router.post('/', async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT actualizar tarea
router.put('/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!task) return res.status(404).json({ error: 'Tarea no encontrada' });
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE eliminar tarea
router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ error: 'Tarea no encontrada' });
    res.json({ message: 'Tarea eliminada correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET reporte XML
router.get('/report/xml', async (req, res) => {
  try {
    const tasks = await Task.find();
    const total = tasks.length;
    const completed = tasks.filter(t => t.status === 'completed').length;
    const pending = tasks.filter(t => t.status === 'pending').length;
    const inProgress = tasks.filter(t => t.status === 'in_progress').length;
    const percentage = total > 0 ? ((completed / total) * 100).toFixed(2) : 0;

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<report>\n`;
    xml += `  <summary>\n`;
    xml += `    <total>${total}</total>\n`;
    xml += `    <completed>${completed}</completed>\n`;
    xml += `    <pending>${pending}</pending>\n`;
    xml += `    <in_progress>${inProgress}</in_progress>\n`;
    xml += `    <percentage>${percentage}%</percentage>\n`;
    xml += `  </summary>\n`;
    xml += `  <tasks>\n`;

    tasks.forEach(task => {
      const estados = { pending: 'Pendiente', in_progress: 'En Progreso', completed: 'Completada' };
      const prioridades = { low: 'Baja', medium: 'Media', high: 'Alta' };
      xml += `    <task>\n`;
      xml += `      <id>${task._id}</id>\n`;
      xml += `      <title>${task.title}</title>\n`;
      xml += `      <description>${task.description}</description>\n`;

      
      xml += `      <status>${estados[task.status]}</status>\n`;
      xml += `      <priority>${prioridades[task.priority]}</priority>\n`;
      xml += `    </task>\n`;
    });

    xml += `  </tasks>\n`;
    xml += `</report>`;

    res.set('Content-Type', 'application/xml');
    res.send(xml);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;