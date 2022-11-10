import ButtonNew from './button/ButtonNew';
import "../styles/buttons.css"
export default function Buttons() {
	return (
		<div className='container'>

			<div className='wrapper'>
				<section>
					<ButtonNew
						id={'btn-one'}
						type={'button'}
						disabled={true}
						variant={'contained'}
						bcolor={'default'}
						size={'medium'}
						value={'Default'}
						
					/>
				</section>
				<section>
					<ButtonNew
						id={'btn-two'}
						type={'button'}
						variant={'outlined'}
						bcolor={'primary'}
						size={'medium'}
						value={'Default'}
					/>
				</section>
				<section>
					<ButtonNew
						id={'btn-three'}
						type={'button'}
						variant={'text'}
						bcolor={'primary'}
						size={'medium'}
						value={'Default'}
					/>
				</section>
				<section>
					<ButtonNew
						id={'btn-four'}
						type={'button'}
						variant={'contained'}
						bcolor={'primary'}
						size={'medium'}
						value={'Default'}
					/>
				</section>

				<section>
					<ButtonNew
						id={'btn-five'}
						type={'button'}
						isDisabled={true}
						variant={'contained'}
						bcolor={'primary'}
						size={'medium'}
						value={'Default'}
					/>
					<ButtonNew
						id={'btn-six'}
						type={'button'}
						isDisabled={true}
						variant={'text'}
						bcolor={'primary'}
						size={'medium'}
						value={'Disabled'}
					/>
				</section>
				<section>
					<ButtonNew
						id={'btn-seven'}
						type={'button'}
						variant={'contained'}
						bcolor={'primary'}
						size={'medium'}
						value={'new button'}
						isStart={'true'}
					/>
					<ButtonNew
						id={'btn-eight'}
						type={'button'}
						variant={'contained'}
						bcolor={'primary'}
						size={'medium'}
						value={'new button'}
						isEnd={'true'}
					/>
				</section>

				<section>
					<ButtonNew
						id={'btn-nine'}
						type={'button'}
						variant={'contained'}
						bcolor={'primary'}
						size={'small'}
						value={'new button'}
					/>
					<ButtonNew
						id={'btn-ten'}
						type={'button'}
						variant={'contained'}
						bcolor={'primary'}
						size={'medium'}
						value={'new button'}
					/>
					<ButtonNew
						id={'btn-ten'}
						type={'button'}
						variant={'contained'}
						bcolor={'primary'}
						size={'large'}
						value={'new button'}
					/>
				</section>
				<section>
					<ButtonNew
						id={'btn-eleven'}
						type={'button'}
						variant={'contained'}
						bcolor={'default'}
						size={'medium'}
						value={'Default'}
					/>
					 <ButtonNew
						id={'btn-twelve'}
						type={'button'}
						variant={'contained'}
						bcolor={'primary'}
						size={'medium'}
						value={'Default'}
					/>
				<ButtonNew
						id={'btn-13'}
						type={'button'}
						variant={'contained'}
						bcolor={'secondary'}
						size={'medium'}
						value={'Secondary'}
					/>
						<ButtonNew
						id={'btn-13'}
						type={'button'}
						variant={'contained'}
						bcolor={'error'}
						size={'medium'}
						value={'Danger'}
					/>
				</section>
			</div>
		</div>
	);
}
