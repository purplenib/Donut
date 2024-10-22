import Dropdown, { Option } from '@components/@shared/Dropdown';
import Toggle from '@icons/toggle.svg';
import { useState } from 'react';

export default function ArrayDropdown() {
  const [selectedFilter, setSelectedFilter] = useState<Option | null>(null);

  const handleSelectFilter = (option: Option) => {
    setSelectedFilter(option);
  };

  const filter: Option[] = [
    { label: '최신순', component: <div>최신순</div> },
    {
      label: '인기순',
      component: <div>인기순</div>,
    },
  ];

  return (
    <Dropdown
      initialOption={{
        label: '최신순',
        component: <div>최신순</div>,
      }}
      options={filter}
      selected={selectedFilter}
      onSelect={handleSelectFilter}
      triggerIcon={<Toggle />}
      triggerClass="flex items-center px-[14px] py-[11px] border border-background-tertiary rounded-[12px] justify-between text-xs-regular md:text-md-regular bg-background-primary text-text-default hover:bg-background-tertiary rounded-[12px] p-[8px]  md:w-[120px] md:h-[44px] w-[109px] h-[40px]"
      optionsWrapClass="mt-2 right-0 rounded-[12px] border border-background-tertiary"
      optionClass="flex items-center px-[14px] py-[11px] rounded-[12px] md:w-[120px] w-[109px] h-[40px] text-xs-regular md:text-md-regular text-center hover:bg-background-tertiary"
    />
  );
}