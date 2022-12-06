const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

//http://localhost3001/api/tags
router.get('/', async (req, res) => {
  const tagData = await Tag.findAll();
  return res.json(tagData);
});

//http://localhost3001/api/tags/:id
router.get('/:id', async (req, res) => {
  const tagData = await Tag.findByPk(req.params.id);
  return res.json(tagData);
});

//http://localhost3001/api/tags
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//http://localhost3001/api/tags/:id
router.put('/:id', async (req, res) => {
  const updatedTag = await Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.json(updatedTag);
});

//http://localhost3001/api/tags/:id
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!tagData) {
      res.status(404).json({ message: 'No tag with this id!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
