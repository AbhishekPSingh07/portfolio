import { social } from "@/assets/common";

export const SidebarSection = () => {
    return (
        <div className="bottom-0 flex flex-col items-center fixed ml-4 text-lg z-50">
            <ul className="list-none">
                {social.map(({ name, link, Icon }, index) => (
                    <li key={index} className="mb-4 p-2">
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {Icon}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="w-px h-24 bg-gray-300 mb-4"></div>
        </div>
        
    )
}