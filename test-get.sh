curl --header "Content-Type: application/json" \
    --request POST \
      --data '{"url":"xyz", "token":"ZWNkY2FlMGJlMzMwMjRkOWNkM2JkNDIw", "action":"get"}' \
        http://localhost:3000/.netlify/functions/tracks
