const translate = require('@iamtraction/google-translate');
module.exports = {
    name: 'translate',
    description: 'Null',
    cooldown: 1,
    async execute(message, args, cmd, client, Discord, profiledata, commonjson){
        const query = args.join(' ')
        if(!query){
            if(profiledata.language === 'en'){
            const embedEn = new Discord.MessageEmbed()
            .setColor(commonjson.failcolor)
            .setTitle("Error")
            .setDescription("Please do not leave the translation entry empty, for more help use the command .help")
            message.channel.send(embedEn)
            return
            }else{
                const embedAr = new Discord.MessageEmbed()
                    .setColor(commonjson.failcolor)
                    .setTitle("خطأ")
                    .setDescription(".help يرجى عدم ترك إدخال الترجمة فارغًا ، لمزيد من المساعدة ، استخدم الأمر ")
                    message.channel.send(embedAr)
            }
        }
        let english = /^(?=.*[A-Z0-9])[\w.,!"'\/$ ]+$/i.test(query)
        console.log(english);
        if(english === true){
            try{
                const translator = await translate(query, { from: 'en', to: 'ar' });
                if(profiledata.language === 'en'){
                const embedEn1 = new Discord.MessageEmbed()
                .setColor(commonjson.defaultcolor)
                .setTitle("English to Arabic Translation:")
                .setDescription(`*Original text*:\n *${query}*\n\n*Translated text*:\n*${translator.text}*`)
                message.channel.send(embedEn1)
                return
                }else{
                    const embedAr1 = new Discord.MessageEmbed()
                .setColor(commonjson.defaultcolor)
                .setTitle("الترجمة من الإنجليزية إلى العربية:")
                .setDescription(`*النص الأصلي*:\n *${query}*\n\n*النص المترجم*:\n*${translator.text}*`)
                message.channel.send(embedAr1)
                return
                }
            }catch(err){
                message.channel.send(err)
            }
            

        }else{
            const translatorAr = await translate(query, { from: 'ar', to: 'en' });
            if(profiledata.language === 'en'){
                const embedEn2 = new Discord.MessageEmbed()
                .setColor(commonjson.defaultcolor)
                .setTitle("Arabic to English Translation:")
                .setDescription(`*Original text*:\n *${query}*\n\n*Translated text*:\n*${translatorAr.text}*`)
                message.channel.send(embedEn2)
                return
            }else{
                const embedAr2 = new Discord.MessageEmbed()
                .setColor(commonjson.defaultcolor)
                .setTitle("ترجمة من العربية إلى الإنجليزية:")
                .setDescription(`*النص الأصلي*:\n *${query}*\n\n*النص المترجم*:\n*${translatorAr.text}*`)
                message.channel.send(embedAr2)
            }
        }
        
        
    
        
    }
} 