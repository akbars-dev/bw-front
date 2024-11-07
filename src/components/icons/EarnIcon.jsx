export default function EarnIcon({active}) {
    return <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M27.3333 9.91667H24.4648C23.8015 9.91667 23.3333 9.2048 23.3333 8.5C23.3333 6.15279 21.5425 4.25 19.3333 4.25C17.1242 4.25 15.3333 6.15279 15.3333 8.5C15.3333 9.2048 14.8651 9.91667 14.2018 9.91667H11.3333C10.597 9.91667 10 10.5509 10 11.3333V14.3811C10 15.0859 9.33002 15.5833 8.66667 15.5833C6.45753 15.5833 4.66667 17.4861 4.66667 19.8333C4.66667 22.1805 6.45753 24.0833 8.66667 24.0833C9.33002 24.0833 10 24.5808 10 25.2856V28.3333C10 29.1157 10.597 29.75 11.3333 29.75L27.3333 29.75C28.0697 29.75 28.6667 29.1157 28.6667 28.3333V25.2856C28.6667 24.5808 27.9967 24.0833 27.3333 24.0833C25.1242 24.0833 23.3333 22.1805 23.3333 19.8333C23.3333 17.4861 25.1242 15.5833 27.3333 15.5833C27.9967 15.5833 28.6667 15.0859 28.6667 14.3811L28.6667 11.3333C28.6667 10.5509 28.0697 9.91667 27.3333 9.91667Z"
            stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

        {active && (
            <path
                d="M27.3333 9.91667H24.4648C23.8015 9.91667 23.3333 9.2048 23.3333 8.5C23.3333 6.15279 21.5425 4.25 19.3333 4.25C17.1242 4.25 15.3333 6.15279 15.3333 8.5C15.3333 9.2048 14.8651 9.91667 14.2018 9.91667H11.3333C10.597 9.91667 10 10.5509 10 11.3333V14.3811C10 15.0859 9.33002 15.5833 8.66667 15.5833C6.45753 15.5833 4.66667 17.4861 4.66667 19.8333C4.66667 22.1805 6.45753 24.0833 8.66667 24.0833C9.33002 24.0833 10 24.5808 10 25.2856V28.3333C10 29.1157 10.597 29.75 11.3333 29.75L27.3333 29.75C28.0697 29.75 28.6667 29.1157 28.6667 28.3333V25.2856C28.6667 24.5808 27.9967 24.0833 27.3333 24.0833C25.1242 24.0833 23.3333 22.1805 23.3333 19.8333C23.3333 17.4861 25.1242 15.5833 27.3333 15.5833C27.9967 15.5833 28.6667 15.0859 28.6667 14.3811L28.6667 11.3333C28.6667 10.5509 28.0697 9.91667 27.3333 9.91667Z"
                stroke="white" strokeOpacity="0.95" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        )}
    </svg>
}