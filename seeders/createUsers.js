import User from "../models/Users.js";

const createUsers = async () => {
  try {
    await User.bulkCreate([
      {
        name: 'Deni',
        email: 'deni240397@gmail.com',
        password: 'password',
        role: 'Super Admin',
        location: 'Medan',
        user_image: 'https://source.unsplash.com/200x200/?man',
      },
      {
        name: 'Vinnie Felim',
        email: 'vinnie.felim@gmail.com',
        password: 'password',
        role: 'Customer Service',
        location: 'Medan',
        user_image: 'https://source.unsplash.com/200x200/?woman',
      },
      {
        name: 'Billy',
        email: 'billy@gmail.com',
        password: 'password',
        role: 'Operasional',
        location: 'Medan',
        user_image: 'https://source.unsplash.com/200x200/?man',
      },
    ]);
    console.log('Seeders for users have been created successfully.');
  } catch (error) {
    console.error('Unable to create seeders for users:', error);
  }
};


export default createUsers;
