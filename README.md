# Guest Wi-Fi QR

A simple web to display your guest Wi-Fi credentials

## Deploy

### Build image

```bash
docker build -t wifi-qr .
```

### Run container

```bash
docker run --name wifi-qr  \
    -d \
    --restart unless-stopped \
    -v "$HOME/.config/wifi-qr:/usr/share/nginx/html/config" \
    wifi-qr
```

### Configure credentials

```bash
echo '{
    "ssid": "your-ssid",
    "password": "your-password",
    "encryption": "WEP",
    "hidden": false
}' > "$HOME/.config/wifi-qr/wifi-config.json"
```
