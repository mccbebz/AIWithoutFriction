# AIWithoutFriction.com Landing Page

This package is a ready static landing page for AIWithoutFriction.com.

## Files
- `index.html` - landing page
- `styles.css` - design styles
- `script.js` - small front-end hook
- `assets/` - Beacon & Sage images and Jeanne photo

## Before upload
Open `index.html` and replace this placeholder email:

`REPLACE_WITH_EMAIL@example.com`

with the email that should receive form submissions.

Important: the current form uses `mailto:` as a fast temporary solution. It opens the visitor's email app. For a proper production form, use Formspree, Google Forms, or a server-side AWS form handler.

## Upload to AWS server with FileZilla/WinSCP
1. Connect to the AWS server using the SSH/SFTP credentials.
2. Find the website root folder. Common locations:
   - `/var/www/html/`
   - `/usr/share/nginx/html/`
   - `/var/www/aiwithoutfriction.com/`
3. Upload all files from this folder into the site root.
4. Visit the server IP in a browser to test.

## GoDaddy DNS
When the AWS server is ready, point the domain to the AWS public IP:

Type: A
Name: @
Value: AWS_SERVER_PUBLIC_IP
TTL: 600 or default

Type: CNAME
Name: www
Value: AIWithoutFriction.com
TTL: 600 or default

If the AWS server has an Elastic IP, use the Elastic IP. If not, create/assign one first so the domain does not break when the server restarts.

## SSL
After DNS points to the server, enable HTTPS using Certbot/Let's Encrypt on the AWS server.


## Version note
This updated package fixes the hero overlap issue by making the background graphic subtle and keeping the form/text in separate grid columns.


## v3 update
Moved the 'What We’ll Explore Together' panel into the hero under the no-sales note, allowed the form to overlap the section, and improved background image clarity.


## v4 update
Uses `assets/hero-network.jpg` as the cleaner hero background graphic.


## v5 update
Cleaned duplicate hero background CSS rules. hero-bg rule count went from 8 to 3. Made the hero graphic smaller: desktop width 34%, laptop width 30%.


## v6 update
Replaced hero graphic with the new network image, set desktop `right: 40%`, and compacted the radio button layout.


## v7 update
Changed hero graphic positioning from percentage-right placement to responsive `clamp()` left/width values so it remains behind the headline/form area without shrinking awkwardly when browser width changes.


## v8 update
Generated a custom text-safe AI/network hero background (`assets/hero-ai-background.png`) and switched the hero to a full responsive background with a readability gradient overlay.
