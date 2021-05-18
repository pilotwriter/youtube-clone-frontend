import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

export const SidebarData = [
    {
        title:"Home",
        path:"/",
        icon:<HomeIcon/>
    },
    {
        title:"Trending",
        path:"/trending",
        icon:<TrendingUpIcon/>
    },
    {
        title:"Subscriptions",
        path:"/subs",
        icon:<SubscriptionsIcon/>
    },
    {
        title:"Liked Videos",
        path:"/liked",
        icon:<ThumbUpIcon/>
    },
]