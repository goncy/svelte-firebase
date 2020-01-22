<script>
  export let displayName;
  export let photoURL;
  export let uid;
</script>

<h3>Hi {displayName}!</h3>

<img src={photoURL} alt="user avatar" width="100" />
<p>Your userID is {uid}</p>
