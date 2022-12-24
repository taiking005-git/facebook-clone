
const friendLists = document.querySelector(".friendLists");
const onlineFriends = document.querySelector(".onlineFriendsLists");

friendLists.innerHTML = userData.map(f =>
    `<li class="friendList">
    <img class="avatar" src=${f.userImg} />
    <span class="friendNames">${f.userName}</span>
    </li >`
).join("")


onlineFriends.innerHTML = userData.map(f =>
    `
    <li class="onlinefriendList">
            <img
                src=${f.userImg}
                alt=""
                class="onlinefriendImg profileImg"
            />
            <b><span class="onlinefriendName">${f.userName}</span></b>
            <div  class=${f.status === "online" ? "online" : "offline"}></div>
    </li>
     `
).join("")

