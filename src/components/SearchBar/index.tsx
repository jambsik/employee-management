import { ChangeEvent, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Input } from '../Input';
import { Button } from '../Button';

export interface SearchBarProps {
    value?: string;
    onChangeFilter: (value: string) => void;
}

export const SearchBar = ({ value, onChangeFilter }: SearchBarProps) => {
    const { t } = useTranslation();
    const [filter, setFilter] = useState(value ?? '');
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
    };
    const handleClick = useCallback(() => {
        onChangeFilter(filter);
    }, [onChangeFilter, filter]);

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onChangeFilter(filter);
        }
    };

    return (
        <div className="flex items-center w-full">
            <Input
                placeholder={t('component.searchBar.placeholder') ?? ''}
                value={filter}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
            />
            <Button onClick={handleClick}>
                {t('component.searchBar.label') ?? ''}
            </Button>
        </div>
    );
};
