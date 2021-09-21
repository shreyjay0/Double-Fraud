## Inspiration 😥
Online frauds have become a major problem in many countries with millions of victims from a wide diversity of scams with online frauds the most common.

**Here are some unbelievable facts related to online fraud that will amaze you:**

1. In the US, one in ten adults will fall victim to a scam or fraud every year.
2. 1.3 million children have their identities stolen every year. 
3. You are more likely to become a victim of identity fraud by having your wallet snatched than you are via online fraud. 
4. Phishing attacks statistics show that 90% of data breaches are from phishing.
5. Every month around 1.5 million new phishing sites are set up.
6. In 2019 internet-enabled theft, fraud, and exploitation were responsible for a massive $2.7 billion in financial losses.
7. In 2020 phishing attempts grew by 105%.
8. 1 in 10 gigs on EBAY is a scam.
9. In 2017 eCommerce fraud rose twice as much as eCommerce sales. 😂

With Covid taking most of the things online, the rate of online financial frauds has increased by 47%. This is because of many people losing their jobs, and an increase in people who spend most of their time online and have been exposed to the dark side of the internet. Most of the victims are financially uneducated and aware of modern scams, making them more and more vulnerable. With one click your whole bank account can go empty. Scamming people has become a piece of cake for experienced fraudsters. This is the right time to solve and mitigate this problem

We propose a solution to this problem and we called **FinForge = Forging Financially**


## What it does 😎
FinForge is a full fraud mitigation and prevention app capable of reducing the risk of you getting scammed drastically. Our app would be the best buddy to netizens who do frequent financial work and online shopping from various sites on the internet. FinForge comes with many features:

1. **Web Scanner** - The first feature of the app is a Web Scanner. It is a Machine learning-powered tool that can detect if a website is authentic/moderate or a total scam. Users can put in the link of a website they suspect and the app can return 4 different values. Authentic/Moderate/Sketchy/total scam. Users are advised to not do any transactions on a Sketchy or a total scam website.

2. **Fraud Library** - Through the fraud library feature, users can go through the scam experiences reported by other users on the platform. They can view it and even post their comments about it. This crowd-based feature would broaden the knowledge of the user regarding financial frauds which will help them **recognize, prevent and avoid** different kinds of scams

3. **Financial News** - The third feature of the app is News. Users are provided with endless personally categorized financial news so that they are aware of all recent changes/schemes and other important information in the finance and fintech world.

4. **Nearby Help** - If you are a victim of a recent fraud, you would obviously need official or legal help. We provide you with an interactive map of all police stations, lawyers and govt offices within a 10km radius. Users can navigate through the map and see who would be the best person to contact according to the feasibility of his location

5. **Report** - So if you have been a victim and philanthropic, you wouldn't want other people to experience what you dealt with. So using our reporting feature you could report the fraudulent website, description of what happened to you, on our platform which would later be displayed in the fraud library section. This would ensure that other users don't even dare to open that website and you get some blessing from god! 😅

6. **Login** - Simple email and password login feature so that you get personalized news and save your previous reports. **Note that It's necessary to log in to use the app**. Because it ensures your verification and authenticity and you will be held if you post vague reports.

## How we built it 😙

Making the app was no easy process. With lots of in-between hurdles, we finally completed it. For **Frontend** we used HTML, CSS, Javascript and React JS and for **Backend** we used Node JS and express and Mongo DB as our database. The ML model was coded using TensorFlow js.
Now let's look at how we made it feature-wise:

1. **Web Scan/ML model** - This was the most complex part of our app. Let me describe how we made it. We found a good dataset for scam/phishing websites -        [click to view dataset](https://archive.ics.uci.edu/ml/datasets/phishing+websites#)
then we built a TensorFlow Neural Network model to predict the result based on 15 features that were:
The IP address in the domain name, length of URL, use of URL shorteners, use of @ symbol, redirecting with //, using - in the domain name, number of dots in the domain, using HTTPS transfer, is registered in the whois, how long have they been registered in the whois and how much longer, where anchor tags link to, use of iframes. When receiving the URL do the appropriate preprocessing of the URL to convert to a numerical system that the model can understand. This completed the ML model and the model would return a value:

**Value < -0.5 - Legitimate (Transactions allowed, no threat)**

**0.5> Value > -0.5 - Suspicious (be reluctant, do only if necessary)**

**Value > 0.5 - Fraud/Scam/Phishy (don't do any transactions)**

These values were displayed on the front end.

2. **Fraud Library** - We stored Reports from the Report section to our Mongo Database and then displayed them on the library page. We also have a real-time comment section and upvote/downvote feature well. Users can post comments which will be saved in our DB and then displayed to other users. The same is for keeping track of the number of upvotes or downvotes.

3. **News** - For this we used **News.com API**. Our backend connects with the API and fetches the most recent news then our backend does sorting to only show financial news. That news is displayed in the news section, Users can see an image, title, and a small description of the news which if they like they can view on read more and read it on the original site.

4. **Nearby Help** - We used google maps places API for showing the nearest police stations and govt offices in a 10km radius.

5. **Report** - Report page is an HTML form whose data is saved into the Mongo DB database. And login is just simple user authentication done with mongo DB


## Challenges we ran into 😳
There were a lot of challenges and one took us a whole night sweating. I'll list them here:

1. Integrating the model with NODE JS - This was our biggest problem and lots of mentors know about it. Initially, we hosted the model on GCP, where it worked perfectly fine with input in the form of a 2D Array. But for some reason, it wasn't parsing when integrated to node js backend. We decided to convert it into TF JS format but the ML guy had a MacBook that wasn't able to perform this task 😭. And the other guy who had the capability of doing it was sleep, he woke up at last hours and finally did the process and the ML worked with our app...

2. Problems with Express - We constantly were bugged with countless problems with express while doing the fraud library. It was a time taking debugging

3. Timezone challenges - Our team was 10 Hours apart so of course, we had timezone issues. Most of us didn't sleep even an hour during the whole hackathon

These were pretty much the biggest challenges we faced

## Accomplishments that we're proud of 🤩

1. Completing such a complex app within 36 hours
2. Integrating the ML Model to our Node JS server
3. Having a real-time comment system.
4. Connecting the News.com API to our backend and having a fully functional endless news section


## What we learned 🤗

1. Mastered React and Express skills.
2. Experience in integrating ML models with nodejs
3. Team coordination skills
4. Building a real-time Mongo DB system

## What's next for Finforge 😏

1. Adding some browser automation stuff for nearby help feature
2. Improving model accuracy and compatibility
3. Monetizing? Maybe
4. More security stuff

We are combating **Financial** fraud.

We are promoting and enabling **Philanthropism**

Our goal is a **Humanitarian** one.

