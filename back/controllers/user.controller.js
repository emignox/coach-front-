const User = require("../models/user.model");
const validator = require("validator");

// Registrazione utente
exports.register = async (req, res) => {
  const { username, email } = req.body;

  // Verifica se l'email è valida utilizzando il modulo "validator"
  if (!validator.isEmail(email)) {
    return res.status(400).send({ message: "Invalid email format" });
  }

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).send({ message: "User already exists" });
    }

    user = new User({ username, email });
    await user.save();

    res.status(201).send({ message: "User registered successfully", user });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Aggiorna la funzione "login" per includere la validazione dell'email
exports.login = async (req, res) => {
  const { username, email } = req.body;

  // Verifica se l'email è valida utilizzando il modulo "validator"
  if (!validator.isEmail(email)) {
    return res.status(400).send({ message: "Invalid email format" });
  }

  if (!username || !email) {
    return res.status(400).send({ message: "Username and email are required" });
  }

  try {
    const user = await User.findOne({ email, username });
    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }

    // Imposta l'ID dell'utente come cookie nella risposta
    res.cookie("userId", user._id, { maxAge: 3600000, httpOnly: true });

    res.status(200).send({ message: "User logged in successfully", user });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
// Aggiungi appuntamento
exports.addAppointment = async (req, res) => {
  const { userId, year, month, day, time } = req.body;

  try {
    // Controlla se esiste già un appuntamento per lo stesso anno, mese, giorno e ora in tutto il database
    const existingAppointment = await User.findOne({
      "appointments.year": year,
      "appointments.month": month,
      "appointments.day": day,
      "appointments.time": time,
    });
    if (existingAppointment) {
      return res
        .status(400)
        .send({ message: "Appointment time not available" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }

    // Aggiungi il nuovo appuntamento
    user.appointments.push({ year, month, day, time });
    await user.save();

    res.status(200).send({ message: "Appointment added successfully", user });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Elimina appuntamento
exports.deleteAppointment = async (req, res) => {
  const { userId, appointmentId } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }

    user.appointments.pull({ _id: appointmentId }); // Utilizza il metodo pull() per rimuovere l'appuntamento dall'array
    await user.save();

    res.status(200).send({ message: "Appointment deleted successfully", user });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Recupera appuntamenti
exports.getAppointments = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }

    res.status(200).send({ appointments: user.appointments });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.getAllAppointments = async (req, res) => {
  try {
    const users = await User.find();
    const appointments = users.map((user) => ({
      user: {
        username: user.username,
        // Aggiungi qui altre proprietà dell'utente che vuoi includere
      },
      appointments: user.appointments,
    }));
    res.status(200).send({ appointments });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
