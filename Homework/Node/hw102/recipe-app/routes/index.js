import express from 'express';
import pool from '../pool.js';
import dotenv from 'dotenv';
import debug from 'debug';
dotenv.config();


const router = express.Router();

// GET all recipes
router.get('/', async (req, res, next) => {
  try {
    const [rows] = await pool.execute(
      'SELECT * FROM recipes'
    );
    res.json(rows);
  } catch (err) {
    next(err);
  }
});
router.route('/:id')
  .get(async (req, res, next) => {
    debug(`serving ${req.params.id}`);

    try {
      const [results] = await pool.execute(
        'SELECT id, title, description, ingridients, instructions,created_at FROM recipes WHERE id = ?', [req.params.id]
      );

      if (!results.length) {
        res.statusCode = 404;
        return res.send(`Cant find contact ${req.params.id}`);
      }

      res.json(results[0]);
    } catch (err) {
      return next(err);
    }
  })
  .put(async (req, res, next) => {
    debug(`updating ${req.params.id}`);

    // should validate input here

    try {
      const [results] = await pool.execute(
        'UPDATE recipes SET first = ?, last = ?, email = ?, phone = ? WHERE id = ?',
        [req.body.first, req.body.last, req.body.email, req.body.phone, req.params.id]
      );

      console.log(results);

      if (!results.affectedRows) {
        res.statusCode = 404;
        return res.send(`Cant find contact ${req.params.id}`);
      }

      res.statusCode = 204;
      res.end();
    } catch (err) {
      return next(err);
    }
  })
  .delete(async (req, res, next) => {
    debug(`deleting ${req.params.id}`);

    try {
      const [results] = await pool.execute(
        'DELETE FROM recipes WHERE id = ?', [req.params.id]
      );

      //console.log(results);

      if (!results.affectedRows) {
        res.statusCode = 404;
        return res.send(`Cant find contact ${req.params.id}`);
      }

      res.statusCode = 204;
      res.end();
    } catch (err) {
      return next(err);
    }
  })
  .put(async (req, res, next) => {
    debug(`updating ${req.params.id}`);

    // should validate input here

    try {
      const [results] = await pool.execute(
        'UPDATE recipes SET first = ?, last = ?, email = ?, phone = ? WHERE id = ?',
        [req.body.first, req.body.last, req.body.email, req.body.phone, req.params.id]
      );

      console.log(results);

      if (!results.affectedRows) {
        res.statusCode = 404;
        return res.send(`Cant find contact ${req.params.id}`);
      }

      res.statusCode = 204;
      res.end();
    } catch (err) {
      return next(err);
    }
  })
  .delete(async (req, res, next) => {
    debug(`deleting ${req.params.id}`);

    try {
      const [results] = await pool.execute(
        'DELETE FROM contacts WHERE id = ?', [req.params.id]
      );

      //console.log(results);

      if (!results.affectedRows) {
        res.statusCode = 404;
        return res.send(`Cant find contact ${req.params.id}`);
      }

      res.statusCode = 204;
      res.end();
    } catch (err) {
      return next(err);
    }
  });
 
 


export default router;
