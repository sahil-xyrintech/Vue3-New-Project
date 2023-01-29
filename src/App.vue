<template>
  <div class="w-screen h-screen bg-slate-300 p-10">
    <ul class="flex justify-between">
      <FriendContact
        name="sahil"
        phoneNumber="934573957379"
        emailAddress="sahil@gamil.com"
        trueFalse="1"
      ></FriendContact>
      <FriendContact
        name="aman"
        phoneNumber="934573957379"
        emailAddress="aman@gmail.com"
        trueFalse="0"
      ></FriendContact>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manish",
          name: "Manish Suthar",
          phone: "9999999999",
          email: "manish@gmail.com",
        },
        {
          id: "aman",
          name: "Aman Kaur",
          phone: "9999999999",
          email: "aman@gmail.com",
        },
      ],
    };
  },
};
</script>
