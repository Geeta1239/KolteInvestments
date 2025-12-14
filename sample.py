import requests

PHONE_NUMBER_ID = "792680683922495"
ACCESS_TOKEN = "EAAPXsN0eclQBPPfXzyMA4abDoZCakFi0O3dv99uU0V09mZAJhFXV2IZB5ZCNHQibzQdVvl5ej07swE2PZAwLlj8KU3hCxaESR9PlMDAmIn5SgxFPJWQeTBdeQQDVdzH6OVBOKg1ycFgxMZCSOPBmyujuZBE4bm9rjnWgiJwrBM5trOCmmARvmYFAZC8Hqjn1BJO7OtAh8kGim4n6sqwEzTtNsZBZBRJO9JrPiEMK5FaPPrbLseRAZDZD"
TO_PHONE_NUMBER = "919595310144" # recipient's number in international format
DOCUMENT_URL = "https://yourwebsite.com/docs/sample.pdf"
FILENAME = "Investment_Guide.pdf"

url = f"https://graph.facebook.com/v18.0/{PHONE_NUMBER_ID}/messages"
headers = {
"Authorization": f"Bearer {ACCESS_TOKEN}",
"Content-Type": "application/json"
}

data = {
"messaging_product": "whatsapp",
"to": TO_PHONE_NUMBER,
"type": "document",
"document": {
"link": DOCUMENT_URL,
"filename": FILENAME
}
}

response = requests.post(url, json=data, headers=headers)
print(response.json())