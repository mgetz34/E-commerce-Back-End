const router = require('express').Router();
const { Category, Product } = require('../../models');

//http://localhost:3001/api/categories/
router.get('/', async (req, res) => {
  const catData = await Category.findAll();
  return res.json(catData);
});

//http://localhost:3001/api/categories/:id
router.get('/:id', async (req, res) => {
  const catData = await Category.findByPk(req.params.id);
  return res.json(catData);
});

//http://localhost:3001/api/categories/
router.post('/', async (req, res) => {
  try {
    const catData = await Category.create(req.body);
    res.status(200).json(catData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//http://localhost:3001/api/categories/:id
router.put('/:id', async (req, res) => {
  const updatedCategory = await Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.json(updatedCategory);
});

//http://localhost:3001/api/categories/:id
router.delete('/:id', async (req, res) => {
  try {
    const catData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!catData) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
