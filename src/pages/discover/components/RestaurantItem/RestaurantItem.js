import RestCard from '../RestaurantCard/RestCard'
import { Pagination } from 'antd'

const RestaurantItem = ({
	data,
	currentPage,
	pageSize,
	handlePageChange,
	handlePageSizeChange,
}) => {
	return (
		<>
			{data && (
				<div style={{ marginTop: '30px' }}>
					{data.content.map(res => (
						<RestCard res={res} key={res.id} />
					))}
					<Pagination
						current={currentPage}
						pageSize={pageSize}
						total={data.totalElements}
						onChange={handlePageChange}
						onShowSizeChange={handlePageSizeChange}
						showSizeChanger={true}
						pageSizeOptions={['5', '10', '50', '100']}
						showTotal={(total, range) =>
							`Showing ${range[0]}-${range[1]} of ${total} items`
						}
					/>
				</div>
			)}
		</>
	)
}

export default RestaurantItem
