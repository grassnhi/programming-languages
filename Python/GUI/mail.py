import smtplib

sender = "sender@gmail.com"
receiver = "receiver@gmail.com"
password = "password123"
subject = "Python email"
body = "My name is Nhi :3"

message = f"""From: Sender {sender}
To: Nhi {receiver}
Subject: {subject}\n
{body}
"""

try:
    server = smtplib.SMTP("smtp.gmail.com", 587)
    server.starttls()

    server.login(sender, password)
    print("Logged in...")

    server.sendmail(sender, receiver, message)
    print("Email has been sent!")

except smtplib.SMTPAuthenticationError:
    print("Unable to sign in")