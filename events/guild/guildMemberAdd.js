const profileModel = require('../../models/profileSchema');

module.exports = async(client, Discord) =>{
    let profile = await profileModel.create({
        userID: member.id,
        serverID: member.guild.id,
        language: "en"
    });
    profile.save();
};