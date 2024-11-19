1. What is OWASP and what is its primary mission as described in the article?

OWASP eller Open Web Application Security Project är en global ideell organisation. De arbetar med att förbättra säkerheten för webbapplikationer. Deras primära uppdrag är att kunna tillhandahålla öppna och gratis resurser för att kunna hjälpa utvecklare, organisationer och säkerhetsexperter att skapa och underhålla säkra applikationer. Detta fokuserar på att identifiera säkerhetsrisker, dela bästa praxis, utveckla verktyg eller för att skydda webbapplikationer från olika attacker. 

2. Explain the concept of "Injection". Provide an example of how an injection attack could compromise a web application's security.

Injection är en attack där en angripare skickar skadlig kod eller data till en applikation via en användarinmatning som inte har validerats eller sanerats på rätt sätt. Denna skadliga kod kan sedan tolkas av en server eller kodtolkare som t.ex. en SQL-databasoch exekveras. De leder till att angriparen kan manipulera applikationen eller få åtkomst till känslig information. Injection-attacker är bland de mest kritiska säkerhetsproblemen för webbapplikationer.

Exempel på en injection-attack:
Ett vanligt exempel på en injection-attack är en SQL-injektion. I de fall kan en angripare manipulera en SQL-fråga genom att införa skadlig SQL-kod i en användarinmatning, som till exempel i ett inloggningsformulär. Om applikationen inte korrekt validerar eller sanerar användarinmatningen kan SQL-koden köras på servern och ge angriparen obehörig åtkomst till applikationens databas.
Ett exempel på just detta om en användare fyller i ett inloggningsformulär med följande inmatning kan se ut på detta sätt: ' OR 1=1 --
Och SQL-frågan som applikationen kör ser då ut så här: 
SELECT * FROM users WHERE username = '' OR 1=1 --' AND password = '';

Detta skulle göra då att frågan alltid returnerar ett resultat, eftersom 1=1 alltid är sant. Detta innebär att angriparen kan komma åt applikationen utan att behöva ange ett korrekt användarnamn eller lösenord. Genom att exekvera sådan skadlig SQL-kod kan angriparen få fullständig åtkomst till användardata eller till och med radera eller manipulera information i databasen.


3. Explain two strategies to prevent Broken Authentication vulnerabilities.

Kräva tvåfaktorsautentisering (2FA):
Genom att införa tvåfaktorsautentisering (2FA) kan säkerheten förbättras avsevärt. 2FA innebär att användaren inte bara behöver sitt användarnamn och lösenord utan också en andra autentiseringsmetod, till exempel en engångskod som skickas till en telefon. Detta gör det mycket svårare för angripare att få tillgång till konton även om de har lyckats stjäla användarnamn och lösenord.

Begränsa eller fördröja upprepade inloggningsförsök genom hastighetsbegränsning (rate limiting):
För att förhindra brute force-attacker, där angripare försöker gissa lösenord genom att automatiskt testa flera kombinationer, kan man införa begränsningar för antalet inloggningsförsök som en användare kan göra under en viss tidsperiod. Detta gör det mycket svårare för angripare att lyckas genom att långsamt testa olika lösenord.

4. Describe the potential consequences of Insecure Deserialization in web applications. How can developers protect against such attacks?

Osäker deserialisering inträffar när webbapplikationer bearbetar data från opålitliga källor, vilket gör det möjligt för angripare att manipulera och ändra innehållet i dataobjekten. Detta kan då leda till allvarliga säkerhetsproblem, som till exempel Fjärrexekvering av kod, där angriparen kan köra skadlig kod på servern.
En osäker deserialisering kan öppna upp för attacker som använder sig av den data som deserialiseras. Detta gör det möjligt för angripare att få full kontroll över applikationen eller servern. Det är särskilt farligt när applikationen bearbetar data från externa källor utan att först kontrollera eller validera innehållet.
Ett effektivt sätt för en utvecklare att skydda sig på mot osäker deserialisering är att förbjuda deserialisering av data från opålitliga källor. Detta är det mest säkra sättet att eliminera risken för attacker via deserialisering. Det finns också Övervakning av deserialisering. Det görs genom att noggrant övervaka processen för deserialisering så kan potentiella attacker upptäckas i ett tidigt stadium. Dessa åtgärder hjälper till att minska riskerna med osäker deserialisering och skydda webbapplikationer från allvarliga säkerhetshot.

5. Briefly define Cross-Site Scripting (XSS) as outlined in the article and list two methods suggested in the article to prevent XSS attacks in web applications.

Cross-Site Scripting eller XSS är en typ av attack där en angripare injicerar skadlig JavaScript-kod i en webbsida som sedan exekveras i en annan användares webbläsare. XSS-attacker kan användas antingen för att stjäla cookies, få tillgång till användarsessioner eller manipulera innehållet på en webbsida. Det gör det möjligt för angripare att köra skadlig kod i offrets webbläsare som kan leda till allvarliga säkerhetsproblem, till exempel identitetsstöld eller skadlig manipulation av webbsidans funktioner.

Två metoder för att förebygga XSS-attacker:
Sanera användarinmatning:
Se till att all användarinmatning som används på webbsidan, exempelvis kommentarer eller sökfält, rensas från farliga HTML- eller JavaScript-taggar. Detta gör att skadlig kod inte kan injiceras genom användarinmatning och köras på andra användares webbläsare.
Använd Content Security Policy (CSP):
En strikt CSP-header kan förhindra att externa och otillförlitliga skript exekveras på webbsidan. Genom att definiera vilka skript och resurser som får köras kan risken för XSS-attacker minskas avsevärt. CSP fungerar som ett extra skydd mot skadlig kod genom att blockera oönskade externa skript.

Dessa metoder hjälper till att skydda webbapplikationer mot XSS-attacker genom att säkerställa att användarinmatning inte leder till skadlig kodkörning och genom att begränsa vilka skript som får köras på sidan.
