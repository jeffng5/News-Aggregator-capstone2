const express = require('express');
const { NotFoundError } = require("./expressError");
const bcrypt = require('bcrypt')
const app = express();
const cors = require("cors")
const {BCRYPT_WORK_FACTOR} = require("./config");
const { ExpressError } = require('./expressError');
const usersRoutes = require("./routes/users");

app.use(express.json());
app.use(cors());
app.use("/users", usersRoutes);
// /** Handle 404 errors -- this matches everything */
// app.use(function (req, res, next) {
//     return next(new NotFoundError());
//   });

// /** Generic error handler; anything unhandled goes here. */
// app.use(function (err, req, res, next) {
//     if (process.env.NODE_ENV !== "test") console.error(err.stack);
//     const status = err.status || 500;
//     const message = err.message;
  
//     return res.status(status).json({
//       error: { message, status },
//     });
//   });


app.post('/register', async (req,res, next)=> {
    try {
        const { username, password } = req.body;
        console.log(req.body)
        if (!username || !password) {
            throw new ExpressError("Username and password required.")
        const hashedPwd = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
        const result = await db.query(`
        INSERT INTO users (username, password)
        VALUES ($1, $2)
        RETURNING username`, [username, hashedPwd])
        return res.json(result.rows[0], 'Logged in!')
        }
    }catch (e) {
        if (e.code === '23505') {
            return next(new ExpressError("Username taken. Please pick another!"))
        }
        return next(e)
    }
})

app.post('/login', async (req, res, next) => {
    try {
        const {username, password} = req.body;
        if (!username || !password) {
            throw new ExpressError("Username and password required.")
        }
        const results = await db.query(
        `SELECT username, password FROM users
        WHERE username = $1`, [username]);
        const user = results.rows[0];
        if (user) {
              if (await bcrypt.compare(password, user.password)) {
                return res.json("Logged in!")
              }
        }
        throw new ExpressError("Username or password not found/doesn't match.")
    } catch(e){
        return next(e)
    }

})
module.exports = app;