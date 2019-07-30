curl --header "Content-Type: application/json" \
    --request POST \
      --data '{"url":"xyz","bpm":"2A", "key":"1234", "token":"ZWNkY2FlMGJlMzMwMjRkOWNkM2JkNDIw", "action":"set"}' \
        http://localhost:3000/.netlify/functions/tracks
