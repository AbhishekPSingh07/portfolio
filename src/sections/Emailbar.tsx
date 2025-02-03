export const EmailSection = () => {
    return (
        <div className="bottom-0 right-0 flex flex-col items-center fixed mr-4 pr-4 z-50">
            <ul className="list-none">
                <li className="mb-4 p-2">
                    <a
                        href="mailto:abhisheksinghas1205@gmail.com"
                        style={{
                            writingMode: 'vertical-rl',
                            paddingRight: '8px', // Add custom right padding to counteract margin issues
                        }}
                    >
                        abhisheksinghas1205@gmail.com
                    </a>
                </li>
            </ul>
            <div className="w-px h-24 bg-gray-300 mb-4"></div>
        </div>
    )
}
