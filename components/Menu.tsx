import { menuItems, role } from '@/data';
import Image from 'next/image';
import Link from 'next/link';

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((item) => (
        <div className="flex flex-col gap-2" key={item.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {item.title}
          </span>
          {item.items.map((subItem) => {
            if (subItem.visible.includes(role)) {
              return (
                <Link
                  href={subItem.href}
                  key={subItem.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-nazimSkyLight"
                >
                  <Image src={subItem.icon} alt="" width={20} height={20} />
                  <span className="hidden lg:block">{subItem.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
