const { User } = require('../../models/user');

const fs = require('fs/promises');
const path = require('path');

const Jimp = require('jimp');

const avatarsDir = path.join(__dirname, '../', '../', 'public', 'avatars');

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;

  const filename = `${originalname}_${_id}`;
  const resultUpload = path.join(avatarsDir, filename);

  await Jimp.read(tempUpload).then((img) => img.resize(250, 250).write(resultUpload));
  await fs.unlink(tempUpload);

  const avatarURL = path.join('avatars', filename);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({avatarURL, });
};

module.exports = updateAvatar;