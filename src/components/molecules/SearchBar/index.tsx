import { ChangeEvent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';

export interface SearchBarProps {
    value: string;
    handleChange: (value: string) => void;
    onSubmitFilter: (value: string) => void;
}

export const SearchBar = ({
    value,
    onSubmitFilter,
    handleChange,
}: SearchBarProps) => {
    const { t } = useTranslation();

    const handleOnChangeValue = (event: ChangeEvent<HTMLInputElement>) =>
        handleChange(event.target.value);

    const handleClick = useCallback(() => {
        onSubmitFilter(value);
    }, [value, onSubmitFilter]);

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onSubmitFilter(value);
        }
    };

    return (
        <div className="flex items-center w-full">
            <Input
                placeholder={t('component.searchBar.placeholder') ?? ''}
                value={value}
                onChange={handleOnChangeValue}
                onKeyDown={handleKeyPress}
            />
            <div className="pl-2">
                <Button onClick={handleClick}>
                    {t('component.searchBar.label') ?? ''}
                </Button>
            </div>
        </div>
    );
};
