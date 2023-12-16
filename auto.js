app.startActivity({
    packageName: "com.ss.android.ugc.aweme", //app的名字
    data: "aweme://user/profile/",
    className: "com.ss.android.ugc.aweme.profile.ui.UserProfileActivity", //上面的to
    extras:
    {
        uid:'4300886819997343',
    },
	root:true
});
// app.startActivity({
//     packageName: "com.ss.android.ugc.aweme", //app的名字
//     className: "com.ss.android.ugc.aweme.friends.ui.RawAddFriendsActivity", //上面的to
//     extras:
//     {
//         key_index:3,
//     },
// 	root:true
// });