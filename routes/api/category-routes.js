const router = require('express').Router();
const { Category, Product } = require('../../models');

//http://localhost:3001/api/categories/
router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const catData = await User.findByPk(req.params.id);
    if (!catData) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//http://localhost:3001/api/categories/:id
router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const catData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!catData[0]) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//http://localhost:3001/api/categories/
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//http://localhost:3001/api/categories/:id
router.put('/:id', async (req, res) => {
  const updatedCategory = await Book.update(
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
    const catData = await User.destroy({
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
