const profileModel = require('../models/profileSchema')
module.exports = {
    name: 'settings',
    description: 'Null',
    cooldown: 1,
    async execute(message, args, cmd, client, Discord, profiledata, commonjson){
        if (!args.length) return
        if(args[0] === 'language'){
            if(!args[1]){
                if(profiledata.language === 'en'){
                    const embedEn = new Discord.MessageEmbed()
                    .setColor(commonjson.failcolor)
                    .setTitle("Settings")
                    .setDescription("What is your preffered language?\n options:\nen:English\nar:Arabic\n To change your language, please use .settings language (preffered language here)")
                    message.channel.send(embedEn)
                    return
                }else{
                    const embedAr = new Discord.MessageEmbed()
                    .setColor(commonjson.failcolor)
                    .setTitle("إعدادات")
                    .setDescription("ما هي لغتك المفضلة؟\n الخيارات:\nen:إنجليزي\nar:العربية\n .settiings language (اللغة المفضلة هنا) :لتغيير لغتك ، يرجى استخدام")
                    message.channel.send(embedAr)
                    return
                }
            }
            if(args[1] === 'en'){
                const embedEn1 = new Discord.MessageEmbed()
                    .setColor(commonjson.defaultcolor)
                    .setTitle("Settings")
                    .setDescription("Your preffered language has been changed to (English)")
                    message.channel.send(embedEn1)
                await profileModel.findOneAndUpdate(
                    {
                    userID: message.author.id,
                    language: "en",

                    },
                ).catch(err =>{
                    console.log(err)
                })
                return
            }
            if(args[1] === 'ar'){
                const embedAr1 = new Discord.MessageEmbed()
                    .setColor(commonjson.defaultcolor)
                    .setTitle("إعدادات")
                    .setDescription("تم تغيير لغتك المفضلة إلى العربية")
                    message.channel.send(embedAr1)
                await profileModel.findOneAndUpdate(
                    {
                    userID: message.author.id,
                    language: "ar",

                    },
                ).catch(err =>{
                    console.log(err)
                })
                return
            }
        }
    }
}