
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if(request.id == "innerT"){

            console.log("inner got a message");
            // var text = request.data;
            console.log(sender);
            sendResponse({thanks: "from inner with love..."});
            // console.log(text);
            console.log("after send response");
        //   document.getElementById('inner_text').innerText = text;
                chrome.storage.sync.set({summary2: request.data});
                console.log("summaey2 is set from innertext2");
        }
    }
);

$(document).ready(function() {

    
    chrome.storage.sync.get('summary2',function (fun) {
        // var perc = $('#intext').innerHTML;
        if (fun.summary2) {
            // window.location.href="/templates/innerTxt.htm";
            // console.log("value of inner text has been added.....");
            $('#intext').text(fun.summary2);
        }
      });

});

// "Home Ministry asks Mamata Banerjee government in West Bengal to submit report on post-election violence targeting opposition political workers Home Ministry asks Mamata Banerjee government in West Bengal to submit report on post-election violence targeting opposition political workers Fact-check: Has govt of India not placed any new orders for coronavirus vaccines since March 2021? Fact-check: Has govt of India not placed any new orders for coronavirus vaccines since March 2021? Home Opinions Manoj Das the storyteller: Alive forever, in a million smiles and a million memories Manoj Das has woven tales of human emotions, experience, sorrows, and joys with such finesse that for his readers, it doesn't matter whether he is at Puducherry or in heaven because he is always there in the pure happiness of a brilliant, perfect story that brings fond memories. On 27 April 2021, Manoj Das said farewell to the material world. He has woven tales of human emotions, experience, sorrows and joys with such finesse that for his readers, it doesn’t matter whether he is at Puducherry or in heaven because he is always there in the pure happiness of a brilliant, perfect story that brings fond memories. For me, and for many like me, Manoj Das will always be in the winds of the beach, in the trees around the villages, in the berry bushes of his childhood, in the old buildings of his stories, and in the countless stories that continue to enthral us with their impeccable word flow, unbelievable plots and simple, clean humour. Speaking at a literary festival in Bhubaneswar once, Bond had told that Manoj Das is the best storyteller in India when it comes to describing Indian village life, even better than RK Narayan. The purity of language, the freshness of his plots, the simplicity of his characters, the extensive shades of human nature, and myriad experiences of life not only delight the reader, they transport them back through the pages to the very set up, to feel every bit of the emotions felt by the characters and to live every moment immortalised in those stories. Odias are fortunate because we get to read the real Manoj Das, the stories, the words and the sentences where he poured down his heart, leaving a magic trail of his extraordinary gift for generations to come. In ‘Bhutuni: Eka Bidaya’ (The she-ghost: A farewell), there is an entire village that loves and cares for the ghost of a young girl that is said to live in an old bungalow. The authorities do not budge, and finally, the villagers decide to find a new home for the ghost, a tree. In countless such characters, situations, and setups, Manoj Das transports the readers into his own wonderland, where his words are woven into intricate fabrics of folklore, beliefs, hopes and ambitions, losses and victories, achievements, and heartbreaks. The stories of Manoj Das are remarkable not just for the vastness of the types of characters he chooses, but for the sheer courage of him as a storyteller. Before I sat down to write it, I had a long discussion with fellow reader and friend Sambit, and we talked about how ‘timeless’ Manoj Das’ stories are. A large part of my childhood and adolescence has been about Manoj Das’ stories. It is impossible to write an article about Manoj Das’ stories and do them justice. Manoj Das will be alive in a million smiles, and a million memories. Click to share on Facebook (Opens in new window) Click to share on Twitter (Opens in new window) Click to share on Flipboard (Opens in new window) Click to share on Reddit (Opens in new window) Click to share on Telegram (Opens in new window) Click to share on WhatsApp (Opens in new window) Report says BJP polling agents raped, women assaulted by TMC goons in Bengal post-poll violence, Police denies Report says BJP polling agents raped, women assaulted by TMC goons in Bengal post-poll violence, Police denies Report says BJP polling agents raped, women assaulted by TMC goons in Bengal post-poll violence, Police denies Report says BJP polling agents raped, women assaulted by TMC goons in Bengal post-poll violence, Police denies Manoj Das the storyteller: Alive forever, in a million smiles and a million memories Manoj Das the storyteller: Alive forever, in a million smiles and a million memories Manoj Das the storyteller: Alive forever, in a million smiles and a million memories Manoj Das the storyteller: Alive forever, in a million smiles and a million memories Manoj Das the storyteller: Alive forever, in a million smiles and a million memories Manoj Das the storyteller: Alive forever, in a million smiles and a million memories Manoj Das the storyteller: Alive forever, in a million smiles and a million memories Manoj Das the storyteller: Alive forever, in a million smiles and a million memories Manoj Das the storyteller: Alive forever, in a million smiles and a million memories NDTV journalist justifies political violence against ABVP karyakartas by TMC goons, claims ‘Twitter account compromised’ NDTV journalist justifies political violence against ABVP karyakartas by TMC goons, claims ‘Twitter account compromised’ NDTV journalist justifies political violence against ABVP karyakartas by TMC goons, claims ‘Twitter account compromised’ NDTV journalist justifies political violence against ABVP karyakartas by TMC goons, claims ‘Twitter account compromised’ Each morning, get an email to keep updated with all the news, opinions and analysis published by OpIndia."