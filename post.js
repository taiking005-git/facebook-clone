
const sharedPost = document.querySelector(".sharedPost");
//src = ${ userData.filter(u => post._id === u.id)[2] }
// src=${getUserProfile(post._id)}

sharedPost.innerHTML = postData.map(post =>
    `
    <div div class="postWrapper" >
        <div class="sharedPostInfo">
            <div class="profileDetails">
                <div class="profileImg">
                    <img
                        src=${userData.filter(u => u.userId === post.userId)[0].userImg}
                        alt=""
                        class="profileImg"
                    />
                </div>
                <div class="profileName">
                    <h4><span class="postUserName">${userData.filter(u => u.userId === post.userId)[0].userName}</span></h4>
                    <span class="postDate">${post.userId === userData[post.userId].userId ? post.date : ""}</span >
                </div >
            </div >
    <div class="more">
        <span class="material-symbols-rounded"> more_horiz </span>
    </div>
        </div >
        <div class="sharedPostText">${post.userId === userData[post.userId].userId ? post.desc ?? "" : ""}</div >
        <div class="sharedPostMedia">
            <img src=${post.userId === userData[post.userId].userId ? post.photo : ""} alt="" class="postImg" />
        </div>
        <div class="sharedPostStatistic">
            <div class="like">
                <span class="material-symbols-rounded thumbUp"> thumb_up </span>
                <span class="material-symbols-rounded favorite"> favorite </span>
                <span id="reactionCount">${post.reactionCount}</span>
            </div>
            <div class="commentnShare">
                <span id="commentCount">${post.commentCount}</span> Comments
                <span id="shareCount">${post.shareCount}</span>
                Shares
            </div>
        </div>
        <hr style="margin:20px" />
        <div class="sharedPostTopReaction">
            <button>
                <span class="material-symbols-rounded"> thumb_up </span>Like
            </button>
            <button>
                <span class="material-symbols-rounded"> comment </span>Comment
            </button>
            <button>
                <span class="material-symbols-rounded"> share </span>Share
            </button>
        </div>
        <div class="sharedPostComment"></div>
    </div >
    `
).join("")

// post reactionCount functions

const postReactCount = document.getElementById("reactionCount");

// console.log(postReactCount.textContent)

// < h4 > <span class="postUserName">${getUserName(post._id)}</span></ h4>
function getUserName(id) {
    if (id === userData[id].userId)
        return userData[id].userName
}

function getUserProfile(id) {
    if (id === userData[id].userId)
        return userData[id].userImg
}