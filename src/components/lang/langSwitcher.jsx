"use client"
import React from 'react'
import { Button } from '../ui/button'
import { useCurrentLocale, useChangeLocale } from '@/locales/client'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../ui/accordion'

export default function LangSwitcher() {
	const changeLocale = useChangeLocale()
	const currentLocale = useCurrentLocale()

	const Lang = currentLocale === 'fr' ? "Langue" : currentLocale === 'en' ? "Language" : "言語";

	return (
		<Accordion className='w-36' type="multiple" collapsible={true}>
			<AccordionItem value="item-1">
				<AccordionTrigger>{Lang}</AccordionTrigger>
					<AccordionContent>
						{['fr', 'en', 'jp'].filter(l => l !== currentLocale).map(l => (
							<Button key={l} variant="link" onClick={() => changeLocale(l) }>{l.toUpperCase()}</Button>
						))}
					</AccordionContent>
			</AccordionItem>
		</Accordion>
)
}
