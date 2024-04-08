import Layout from 'antd/lib/layout';
const { Content } = Layout;

const Content2 = () => {
    
    return (
        <Content>

            <div className='text-2xl text-center py-5'>Results</div>

            <Content
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              
              <Content
                style={{
                  padding: '0 24px',
                  minHeight: 280,
                }}
                className='text-center'
              >
                <div className='text-xl text-center'>Qualifying</div>
              </Content>

              
              <Content
                style={{
                  padding: '0 24px',
                  minHeight: 280,              
                }}
                className='text-center'
                >
                <div className='text-xl text-center'>Results</div>
              </Content>
            </Content>
          </Content>
    )
}

export default Content2;