import SvgGuideDao from '@/components/assets/logo.icon';
export default function Header() {
  return (
    <header className='mb-16 flex items-end'>
      <SvgGuideDao />
      <span className='uppercase block text-[15px]'>Sandbox</span>
    </header>
  );
}

// export default Header;
